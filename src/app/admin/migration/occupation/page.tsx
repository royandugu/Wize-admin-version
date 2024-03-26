import CmsDisplay from "../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay";

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/occupation" getLink="/occupation" fetchQueryName="cms-occupation-display"/>
    )
}
export default Page;