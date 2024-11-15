import { useState } from 'react';
import aboutStyles from '../../styles/module/about.module.css';
import styles from '../../styles/module/question.module.css';

type QuestionItem = {
    question: string; 
    answer: string;
}

const questions: QuestionItem[] = [
    {
        question: 'アウトドア初心者ですが大丈夫ですか？',
        answer: '大丈夫です。キャンプが初めてでもできるようレベルを調整してあります。<br>火や刃物を扱うので、マナーや安全指導などの知識面もカバーしています。'
    },
    {
        question: '一人参加でも大丈夫ですか？',
        answer: '一人参加でも大丈夫です。'
    },
    {
        question: 'テントなど持っていません。<br>道具はレンタルできますか？',
        answer: 'はい、道具はレンタルできます。'
    }
]

const Question = () => {
    const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

    const handleToggle = (index: number) => {
        if (activeIndexes.includes(index)) {
            setActiveIndexes(activeIndexes.filter(i => i !== index));
        } else {
            setActiveIndexes([...activeIndexes, index]);
        }
    }

    return (
        <div>
            <div>
                <div className={`${aboutStyles.sectionTitle} ${styles.sectionTitle}`}>よくあるご質問</div>
            </div>
            <div className={aboutStyles.sectionBox}>
                {questions.map((item, index) => (
                    <div key={index}>
                        <div className={styles.questionItem} onClick={() => handleToggle(index)}>
                            <div className={styles.questionTitle}>
                                <span>Q</span><div dangerouslySetInnerHTML={{ __html: item.question }} />
                            </div>
                            <div className={styles.icon}>{activeIndexes.includes(index) ? '−' : '＋'}</div>
                        </div>
                        <div className={`${styles.answerTitle} ${activeIndexes.includes(index) ? '' : styles.hidden}`}>
                            <span>A</span> <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Question;
