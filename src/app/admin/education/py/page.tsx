import CmsDisplay from '../../../../../components/adminComponents/primaryComponents/cms/cmsDisplay';

const Page = () => {
    return (
        <CmsDisplay updateLink="/admin/education/py" getLink="/education/py" fetchQueryName="cms-py-display"/>
    )
}
export default Page;