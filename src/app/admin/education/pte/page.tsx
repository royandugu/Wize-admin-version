import dynamic from "next/dynamic";

const CmsDisplay = dynamic(() => import('../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay'), { ssr: false })

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/education/pte" getLink="/education/pte" fetchQueryName="cms-pte-display"/>
    )
}
export default Page;