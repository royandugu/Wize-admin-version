import CmsDisplay from "../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay";

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/migration/tr" getLink="/migration/tr" fetchQueryName="cms-tr-display"/>
    )
}
export default Page;