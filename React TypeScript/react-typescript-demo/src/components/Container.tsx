type ContainerProps = {
    styles: React.CSSProperties
}

/* {{border:'1px solid black', padding:'1 rem'}} */

export const Container = (props:ContainerProps) => {
 return <div style={props.styles}>
     Text Content goes here
 </div>   
}