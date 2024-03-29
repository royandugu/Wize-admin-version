import dynamic from "next/dynamic";

const CmsDisplay = dynamic(() => import('../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay'), { ssr: false })

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/migration/partner" getLink="/migration/partner" fetchQueryName="cms-partner-display"/>
    )
}
export default Page;