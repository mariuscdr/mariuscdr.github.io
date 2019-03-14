def fr(x):
    n,d,e,z=0,0,1,x
    while abs(n/e-x)>1e-6:
        z=1/(z%1)
        d,e=e,e*int(z)+d
        n=round(x*e,0)
        print(int(n),"/",e)
        resultat = "{}/{}".format(int(n), e)
    return(resultat)

fr(2/8)