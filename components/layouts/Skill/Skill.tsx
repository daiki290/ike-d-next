import styles from '@/styles/components/Skill/Skill.module.css'
import dynamic from "next/dynamic";
import React from 'react';

// 表示するデータを配列として定義
const front_skill = [
    {name: "Vue.js", value: 4},
    {name: "nuxt.js", value: 2},
    {name: "React.js", value: 2},
    {name: "next.js", value: 1},
    {name: "TypeScript", value: 3},
]

const back_skill = [
    {name: "Python", value: 3},
    {name: "Go", value: 2},
    {name: "node.js", value: 2},
    {name: "Java", value: 2},
]

const phone_skill = [
    {name: "Swift", value: 1},
    {name: "Java", value: 1},
    {name: "flutter", value: 2}
]

const infra_skill = [
    {name: "AWS SAM", value: 3},
    {name: "AWS cfn", value: 4},
    {name: "AWS Amplify", value: 2},
    {name: "firebase", value: 4}
]

const test_skill = [
    {name: "jest", value: 2},
    {name: "cypress", value: 4},
    {name: "Postman", value: 4},
    {name: "pytest", value: 3},
]

const tool_skill = [
    {name: "git", value: 4},
    {name: "slack", value: 5},
    {name: "Adobe XD", value: 3},
    {name: "Wix", value: 2},
]
const DynamicChart = dynamic(() => import('../../elements/Chart/BarChart').then(mod => mod.default ), { ssr: false });

export default function Skill(){
    
    return(
        <>
            <div className={styles.skill} id="skill">
                <h2 className='catch'>Skill</h2>
                <div className={styles.description}>
                    <div className={styles.skillChart}>
                        <h3>フロントエンド</h3>
                        <DynamicChart dataList={front_skill} />
                    </div>
                    <div className={styles.skillChart}>
                        <h3>バックエンド</h3>
                        <DynamicChart dataList={back_skill} />
                    </div>
                    <div className={styles.skillChart}>
                        <h3>インフラ</h3>
                        <DynamicChart dataList={infra_skill} />
                    </div>
                    <div className={styles.skillChart}>
                        <h3>スマホ</h3>
                        <DynamicChart dataList={phone_skill} />
                    </div>
                    <div className={styles.skillChart}>
                        <h3>テスト</h3>
                        <DynamicChart dataList={test_skill} />
                    </div>
                    <div className={styles.skillChart}>
                        <h3>ツール</h3>
                        <DynamicChart dataList={tool_skill} />
                    </div>
                </div>
            </div>
        </>
    )
}