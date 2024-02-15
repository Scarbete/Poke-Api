import '../../App.css'


export const Pagination = (props) => {
    const {page, handleNext, handlePrev, count} = props

    return (
        <div className='btnBox'>
            <button onClick={handlePrev}>Prev</button>
            <h2> {page} / {count} </h2>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}