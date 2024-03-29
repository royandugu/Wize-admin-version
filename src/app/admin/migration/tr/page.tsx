import dynamic from "next/dynamic";

const CmsDisplay = dynamic(() => import('../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay'), { ssr: false })

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/migration/tr" getLink="/migration/tr" fetchQueryName="cms-tr-display"/>
    )
}
export default Page;