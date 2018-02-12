using UnityEngine;
using System.Collections;

public class WizardNumber : MonoBehaviour {
	int max = 1000;
	int min = 1;
	int guess = 500;

	// Use this for initialization
	void Start () {

	print ("the max number you can pick is " + max);
	print ("the min number you can pick is " + min);
	
	print ("Is the number ?" + guess);
	
	print ("Up arrow -> Higher, Down arrow -> lower, return -> return ");
	}
	
	/*
	o numero eh 500? (1000/2)
	pra cima -> 500 e 1000 -> perguntar se o numero eh 750
	pra cima -> 750 e 1000 -> perguntar se eh 875
	pra cima -> 875 e 1000 -> pergunta se eh 77
	pra cima -> 938 e 1000 -> pergunta se eh 
	*/
	
	// Update is called once per frame
	void Update () {

		if (Input.GetKeyDown(KeyCode.UpArrow)) {
		min = guess;
		guess = ((min + max)/2);
		print ("Is the number? " + guess);
		
		
		}else if (Input.GetKeyDown(KeyCode.DownArrow)) {
			max = guess;
			guess = ((min + max)/2);
			print ("Is the number? " + guess);
			
		}else if(Input.GetKeyDown(KeyCode.Return)) {
		print ("I won the console");
		}
		
	}
	
	
	
	
	
}
