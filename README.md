Folder structuring 

1. The actual content consists inside the components folder 
2. adminComponents are the components that can be viewed only by the Admin
                ||

        Primary components are the main 
        reusable components includes header
        and footer 

                ||

        Secondary components are the individual 
        components that includes other individual page
        details

                || 

        System components include the components that are
        common to both admin and the users. They can be like the 
        sky blue wrappers and all.
        | - Static components : These are the static components
        | - Common components : These are the components common to both user and admin
        |

3. userComponents are the components that can be viewed by users
4. Inside each individual component folder the componentnameDisplay is the one that displays to the front end
5. The very parent container div have a class same as the class name
6. Breakpoints:
        Breakpoints are defined in the form of equations like lg, md are some defined tailwind breakpoints
        For our own we can put things like lg+100, which means lg=1024 and lg+100=1124 which is our another breakpoint




## To be done

Backend ko CMS mah content add garna milne plus remove garna milne, tala mathi parna milne. Logic chain euta array mah content pathaune:
Our schema would be something like [{title:'',subtitle:'',image}] like this. Now yeslai array kasari change garne vanda tyo component component 
create garna milxa ra harek component ko side mah tesko position auxa. Ho yo position laii change garera apply garepaxi tyo position pani change
hunxa. Now on the basis of that changed position hamro content tesari naii auxa front end mah ra tesari naii render garne. Ho yo massive changes
haru implement hannu parxa.
 
 
## CMS submit function
const submitForm = async () => {
        let revert = false;
        let index = 0;

        contextContainer.setLoading(0);
        try {
            const promises = dataContents.map(async (cnts) => {
                if (cnts.image && cnts.image instanceof File && typeof cnts === 'object') {
                    console.log("first")
                    const { data: imageOneUrl, status: imageOneStatus } = await uploadFile(cnts.image, edgestore);
                    if (imageOneStatus) {
                        cnts.image = imageOneUrl;
                        ++index;
                    } else {
                        contextContainer.setLoading(3);
                        revert = true;
                        return;
                    }
                }
            });

            await Promise.all(promises);

            if (!revert) {
                const response = await universalJSONPost({ content: dataContents }, uploadLink);
                index++;
                console.log(index);
                if (response?.ok) contextContainer.setLoading(2);
                else contextContainer.setLoading(3);
            } else {
                contextContainer.setLoading(3);
            }
        } catch (err) {
            contextContainer.setLoading(3);
        }
    }


## Plans
1. Apply CMS in all of them
2. Fix the click issue