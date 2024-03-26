import CmsDisplay from "../../../../components/adminComponents/primaryComponents/cms/cmsDisplay";

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/education" getLink="/education" fetchQueryName="cms-education-display"/>
    )
}
export default Page;