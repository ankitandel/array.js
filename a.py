a=[1,4,6,8,9,5,6,3]
# a=["ankita","pooja","mina","sngita"]
for i in range(len(a)):
    for j in range(len(a)-1):
        if a[j]>a[j+1]:
            b=a[j]
            a[j]=a[j+1]
            a[j+1]=b
print(a)


