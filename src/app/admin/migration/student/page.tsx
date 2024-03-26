import CmsDisplay from "../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay";

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/student" getLink="/student" fetchQueryName="cms-student-display"/>
    )
}
export default Page;