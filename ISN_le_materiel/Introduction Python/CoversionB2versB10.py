# -*- coding: utf-8 -*-
"""
Created on Fri Aug 25 14:16:13 2017

@author: jerome
"""
"""
def convertBase2versBase10(x):

 #Entrée: x un nombre écrit en base 2
 #Sortie: y est le nombre x  écrit en base 10
   
    lx=len(x)
    y=0
    for i=0 to lx-1:
        p=x[i]*2^i
        y=y+p
    return y

"""

def convertBase2versBase10(x):
    
 	#Entrée: x un nombre écrit en base 2
	#Sortie: y est le nombre x  écrit en base 10
    lx=len(x)
    y=0
    for i in range(lx): 
        p=int(x[i])*2**i
        y=y+p
    return y
    
S=0
A=0
for k in range(5):
    S=S+k+1
print S
""" 
I=0
S=0
while I<=3:
        
        I=I+1
        S=S+I
        print S
"""        