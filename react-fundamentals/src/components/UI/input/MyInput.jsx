import classes from './MyInput.module.css'
const myInput = React.forwardRef((props,ref) => {
    return (
<input ref={ref} className={classes.myInput} {...props}/>
    )
})

export default myInput