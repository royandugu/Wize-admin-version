import dynamic from "next/dynamic";

const QuizViewDisplay = dynamic(() => import("../../../../components/adminComponents/secondaryComponents/quizComponents/quizViewDisplay"), { ssr: false })
const Page=()=>{
    return <QuizViewDisplay/>
}
export default Page;