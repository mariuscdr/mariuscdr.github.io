from math import *
nboriginal=0
nbinaire=""
nboriginal=input("nombre a convertir : ")
nboriginal = float(nboriginal)
#print(nboriginal)
nbactuel=nboriginal
while nbactuel != 0:
  if nbactuel%2 == 0:
    nbactuel/=2
    nbinaire += "0"
  else:
    nbactuel = (nbactuel-1)/2
    nbinaire += "1"

print("\n"+nbinaire+ "\n")
