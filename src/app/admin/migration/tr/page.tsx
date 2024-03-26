import CmsDisplay from "../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay";

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/tr" getLink="/tr" fetchQueryName="cms-tr-display"/>
    )
}
export default Page;