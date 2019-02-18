using System;
using System.Diagnostics;

namespace PracticingLive
{
    class Program
    {
        static void Main(string[] args)
        {
            BinaryTree novaArvore = new BinaryTree();
            novaArvore.root = new Node(3);
            novaArvore.addNode(novaArvore.root, 1);
            novaArvore.addNode(novaArvore.root, 5);

            Console.ReadKey();
        }
    }


    public class Node
    {
        public int Value { get; set; }
        public Node Left { get; set; }
        public Node Right { get; set; }

        public Node(int value)
        {
            this.Value = value;
            this.Left = null;
            this.Right = null;
        }
    }

    public class BinaryTree
    {
        public Node root;

        public Node addNode(Node root, int value)
        {
            if(root == null)
            {
                var newRoot = new Node(value);
                root = newRoot;
            }
            else if(value < root.Value)
            {
                root.Left = addNode(root.Left, value);
            }
            else
            {
                root.Right = addNode(root.Right, value);
            }

            return root;
        }
    }


}