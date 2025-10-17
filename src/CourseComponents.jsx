const course1 = "React Component concept learning in internal CSS"

function CourseComponents() {

    const styles = {
        backgroundColor : "pink",
        padding:"10px",
        borderRadius : "8px"
    };
    return (
        <div style={styles}>
            {/* <img src="" alt="" /> */}
            <h3>{course1} Learning</h3>
            <p>This is a JS learning course</p>
        </div>
    );
}

export default CourseComponents;
