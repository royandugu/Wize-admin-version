import dynamic from "next/dynamic";

const CmsDisplay = dynamic(() => import('../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay'), { ssr: false })

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/migration/occupation" getLink="/migration/occupation" fetchQueryName="cms-occupation-display"/>
    )
}
export default Page;