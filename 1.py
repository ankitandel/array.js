list=[6,9,15,3,1,0,5,8,7,17]
i=0
for i in range(i ,len(list)):
    for j in range (i+1,len(list)):
        if(list[i]>list[j]):
            temp=list[i]
            list[j]=list[i]
            list[j]=temp

print(list)