
function activar(    who:string,   the_object:string = "Bati-Signal"  , momento?:string   ){
    let mensaje:string;

    mensaje = `${who} activated the ${the_object}`

    if( momento )
        mensaje += ` ${momento}`

    console.log( mensaje );
}


activar( "Chemo","Chemo-Signal", "Yesterday" );
