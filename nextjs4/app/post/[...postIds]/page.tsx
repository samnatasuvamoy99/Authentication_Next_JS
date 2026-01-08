export default async function page({params}:{ 
    params: Promise<{postIds: string[]}>;
  }){
           const {postIds} = await params;   
        return <div>
                {JSON.stringify(postIds)}
        </div>
}

// this concepts is catch all routes