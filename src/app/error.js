
'use client'


const error = ({error, reset}) => {


  return (
    <>
        <div className="h-[100vh] flex justify-center items-center"> 
            <div>
                {error
                    ?<div>
                        <h1 className="mb-3">{error?.name}</h1>
                        <p>{error?.message}</p>
                    </div>
                    :<div>Opps! Something went wrong</div>
                }
                <button onClick={reset} className="mt-3">Reload</button>
            </div>             
        </div>
    </>    
  )
}

export default error