import numpy as np

def importNodes(nodes_file):
    edges = []
    adjacency_matrix = {}
    number_nodes = 0

    with open(nodes_file, "r") as datafile:
        for line in datafile:
            node1, node2 = line.split()
            node1 = int(node1)
            node2 = int(node2)
            edges.append({node1, node2})
            number_nodes = max(number_nodes, node1, node2)

    number_nodes += 1  # We only had the maximum index of the nodes

    # Initiate empty matrix
    adjacency_matrix = np.zeros((number_nodes, number_nodes))

    # Fill the matrix
    for node1, node2 in edges:
        # The adjancency matrix is symmetric
        adjacency_matrix[node1][node2] = 1
        adjacency_matrix[node2][node1] = 1
    
    print("Graph edges:\n", edges)

    return (number_nodes, edges, adjacency_matrix)


def degreeNodes(adjacency_matrix, number_nodes):
    # Compute the degree of each node
    # Returns the vector of degrees

    d = []
    for i in range(number_nodes):
        d.append(sum([adjacency_matrix[i][j] for j in range(number_nodes)]))

    return d


def algorithm(nodes_file):
    # The Spectral Partitioning Algorithm

    number_nodes, edges, adjacency_matrix = importNodes(args.nodes_file)
    print("\nAdjacency matrix:\n", adjacency_matrix)

    degrees = degreeNodes(adjacency_matrix, number_nodes)
    print("\nDegrees:\n", degrees)

    laplacian_matrix = np.diag(degrees) - adjacency_matrix
    print("\nLaplacian matrix:\n", laplacian_matrix)

    eigenvalues, eigenvectors = np.linalg.eigh(laplacian_matrix)
    print("\nEigenvalues:\n", eigenvalues)
    print("\nEigenvectors:\n", eigenvectors)

    # Index of the second eigenvalue
    index_fnzev = np.argsort(eigenvalues)[1]

    # Partition on the sign of the eigenvector's coordinates
    partition = [val >= 0 for val in eigenvectors[:, index_fnzev]]

    # Compute the edges in between
    nodes_in_A = [nodeA for (nodeA, nodeCommunity) in enumerate(partition) if nodeCommunity]
    nodes_in_B = [nodeB for (nodeB, nodeCommunity) in enumerate(partition) if not nodeCommunity]
    edges_in_between = []
    for edge in edges:
        node1, node2 = edge
        if node1 in nodes_in_A and node2 in nodes_in_B \
                or node1 in nodes_in_B and node2 in nodes_in_A:
            edges_in_between.append(edge)

    return number_nodes, edges, nodes_in_A, nodes_in_B

if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser(description="Compute the partition of a "
        "graph using the Spectral Partition Algorithm.")

    parser.add_argument('--nodes-file', '-f', help='the file containing the nodes',
                        default='graph.txt')

    args = parser.parse_args()

    number_nodes, edges, groupA, groupB = algorithm(args.nodes_file)

    print("\nGroup A:\n", groupA)
    print("\nGroup B:\n", groupB)