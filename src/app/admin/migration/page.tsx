import dynamic from "next/dynamic";

const CmsDisplay = dynamic(() => import('../../../../components/adminComponents/primaryComponents/cms/cmsDisplay'), { ssr: false })

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/migration" getLink="/migration" fetchQueryName="cms-migration-display"/>
    )
}
export default Page;