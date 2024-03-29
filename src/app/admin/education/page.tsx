import dynamic from "next/dynamic";

const CmsDisplay = dynamic(() => import('../../../../components/adminComponents/primaryComponents/cms/cmsDisplay'), { ssr: false })

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/education" getLink="/education" fetchQueryName="cms-education-display"/>
    )
}
export default Page;