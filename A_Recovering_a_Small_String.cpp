#include<bits/stdc++.h>
using namespace std;
int main(){
int t;
cin>>t;
while(t--){
    int x,sum=0,third=0,second=0,first=0;
    cin>>x;
    int i,j,k;
    for( i=1;i<=26;i++){
        if(sum<x){
            sum+=1;
            }
            else{
                first=i-1;
                break;
            }
        for ( j = 1; j <= 26; j++)
        {
            if(sum<x){
            sum+=1;
            }
            else{
                second=j-1;
                break;
            }
         for ( k = 1; k <= 26; k++)
         {
            if(sum<x){
             sum+=1;
            }
                                   
            else{
                third=k-1;
                break;
            }
         }
         
        }
        
    }
    cout<<first<<" "<<second<<" "<<third<<endl;
} 
return 0;
}