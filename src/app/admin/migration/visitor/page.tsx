import dynamic from "next/dynamic";

const CmsDisplay = dynamic(() => import('../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay'), { ssr: false })

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/migration/visitor" getLink="/migration/visitor" fetchQueryName="cms-visitor-display"/>
    )
}
export default Page;