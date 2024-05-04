import CmsDisplay from "../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay";

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/migration/occupation" getLink="/migration/occupation" fetchQueryName="cms-occupation-display"/>
    )
}
export default Page;