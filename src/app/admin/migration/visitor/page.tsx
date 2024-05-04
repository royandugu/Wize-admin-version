import CmsDisplay from "../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay";

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/migration/visitor" getLink="/migration/visitor" fetchQueryName="cms-visitor-display"/>
    )
}
export default Page;