import CmsDisplay from "../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay";

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/migration/partner" getLink="/migration/partner" fetchQueryName="cms-partner-display"/>
    )
}
export default Page;