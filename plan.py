from math import *

print("1 : milieu\n2: distance\n3 : symétrie")

rep = int(input("programmme : "))

if(rep == 1):
	Xa = float(input("Xa = "))
	Xb = float(input("XB = "))
	Ya = float(input("Ya = "))
	Yb = float(input("Yb = "))
	print("M({};{})".format((Xa + Xb) / 2, (Ya + Yb) / 2))

elif(rep == 2):
	Xa = float(input("Xa = "))
	Xb = float(input("XB = "))
	Ya = float(input("Ya = "))
	Yb = float(input("Yb = "))
	print("distance AB = {}".format(sqrt((Xb - Xa)**2 + (Ya - Yb)**2)))

elif(rep == 3):
	print(rep)

else:
	print("choisissez un programme parmis les 3 proposés")