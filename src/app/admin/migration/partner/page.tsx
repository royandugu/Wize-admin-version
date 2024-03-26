import CmsDisplay from "../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay";

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/partner" getLink="/partner" fetchQueryName="cms-partner-display"/>
    )
}
export default Page;