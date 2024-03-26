import CmsDisplay from "../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay";

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/py" getLink="/py" fetchQueryName="cms-py-display"/>
    )
}
export default Page;