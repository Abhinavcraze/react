import styles from './Components.module.css'

const course1 = "JavaScript"

function Components() {
    return (
        <div className={styles.card}>
            <h3>React Learning</h3>
            <p>This is a React learning course</p>
            <h3>{course1} Learning</h3>
            <p>This is a JS learning course</p>
            <h3>{10+20}</h3>
        </div>
    );
}

export default Components;
