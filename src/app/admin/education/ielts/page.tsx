import dynamic from "next/dynamic";

const CmsDisplay = dynamic(() => import('../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay'), { ssr: false })

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/education/ielts" getLink="/education/ielts" fetchQueryName="cms-ielts-display"/>
    )
}
export default Page;