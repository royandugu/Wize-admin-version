Common components that is shown only in admin side






async authorize(credentials, req) {
          const response:any = await universalJSONPost({email:credentials?.email, password:credentials?.password},"/admin/login");
          const jsonVersion=await response.json();
          if(jsonVersion?.loginStatus){
            return JSON.parse(JSON.stringify(jsonVersion.bodyData));
          }
          else return null;
        }