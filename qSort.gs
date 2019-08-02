qSort.([])=[]
qSort.(x::xs)=s++[x]++l
	where 
		s=qSort.([y|y<-xs,y<=x])
		l=qSort.([y|y<-xs,y>x]) 

get.([])=[]
get.(y::z::[])=[]
get.(x::y::z::xs)=x::get.(y::z::xs)

funct.(x::xs)=get.(qSort.(x::xs))
