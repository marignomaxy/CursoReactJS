import GrowExample from '../Component/Spinner';


function Loading({children,loadign}) {
    if(loadign){
        return(
            <div>
                <GrowExample/>
            </div>
        )
    }else{
        return(
            <>
                {children}
            </>
        )
    }
}

export default Loading