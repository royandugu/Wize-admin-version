import CmsDisplay from "../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay";

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/colleges" getLink="/colleges" fetchQueryName="cms-colleges-display"/>
    )
}
export default Page;