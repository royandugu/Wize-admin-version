import CmsDisplay from "../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay";

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/education/ielts" getLink="/education/ielts" fetchQueryName="cms-ielts-display"/>
    )
}
export default Page;