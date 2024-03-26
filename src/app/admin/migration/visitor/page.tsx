import CmsDisplay from "../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay";

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/visitor" getLink="/visitor" fetchQueryName="cms-visitor-display"/>
    )
}
export default Page;