var Perfect_Check = (N) => 
{
     let C = 0;
     for(let i=1; i<=N/2; i++)
     {
         if(N%i === 0)
          {
            C += i;
          }
     }
   
     if(C === N && C !== 0)
        {
        return "YES";
        } 
     else
        {
        return "NO";
        }   
        
};