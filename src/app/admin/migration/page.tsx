import CmsDisplay from "../../../../components/adminComponents/primaryComponents/cms/cmsDisplay";

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/migration" getLink="/migration" fetchQueryName="cms-migration-display"/>
    )
}
export default Page;