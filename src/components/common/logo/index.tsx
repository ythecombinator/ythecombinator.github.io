import React, {FunctionComponent} from 'react';

import {tailwind} from '@theme-ui/presets';
import {useColorMode} from 'theme-ui';

const { gray } = tailwind.colors;

const Logo: FunctionComponent = () => {
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 251 28"
      width="251px"
      height="28px"
    >
      <defs />
      <g fill={isDark ? gray[1] : gray[9]} fill-rule="nonzero">
        <path d="M33.47557 28l7.3876222-20.78805284h-3.9576547L33.47557 18.3377369h-.1172638L30.0309446 7.21194716H26l5.5260586 15.59103964-.747557 2.2400919h-3.8403909V28H33.47557zm19.4657981-5.1970132v-2.9718553h-3.8110749v-9.662263h3.8110749V7.21194716h-3.8110749V2h-3.752443v5.21194716h-3.034202v2.95692134h3.034202v12.6341183h7.5635179zm7.3289902 0v-9.0201034c0-1.1449362.2907168-2.0683515.8721498-2.770247.5814336-.7018954 1.3900649-1.0528432 2.4258958-1.0528432.8990225 0 1.539088.2538771 1.9201954.7616313.3811075.5077541.5716613 1.2196059.5716613 2.1355542v9.9460081h3.752443V12.5881677c0-1.7920735-.4055369-3.1983537-1.2166124-4.21883973-.8110746-1.02048692-2.0765475-1.53072946-3.7964169-1.53072946-1.0846906 0-1.9959287.22898778-2.7337134.68696151-.7377784.45797465-1.3363128 1.10511201-1.7956026 1.94141298V2h-3.752443v20.8029868h3.752443zm20.1547231.3733486c1.8664492 0 3.3933225-.4803751 4.5806189-1.4411258 1.1872964-.9607506 1.9030942-2.3072946 2.1473942-4.0396323h-3.752443c-.0977202.7964772-.4055378 1.4137469-.9234528 1.8518093-.517915.4380623-1.1872964.6570936-2.0081433.6570936s-1.531759-.2563662-2.1327362-.7690982c-.6009772-.5127323-.9014658-1.2370287-.9014658-2.1728892v-1.0304423h9.8355049v-1.926479c0-1.0652787-.1587954-2.0558968-.4763844-2.9718552-.3175898-.9159366-.7768729-1.7049464-1.3778501-2.36703049-.6009772-.66204395-1.324104-1.18224277-2.1693811-1.56059736-.8452674-.37832723-1.7858214-.56748994-2.8216613-.56748994-1.0358304 0-1.9788273.19414129-2.8289902.58242389-.8501629.3882826-1.5757329.9383493-2.1767101 1.650201-.6009772.7118518-1.0675895 1.5680644-1.3998371 2.5686387-.3322474 1.0005744-.4983714 2.1131534-.4983714 3.337737 0 1.2245836.1563517 2.3396514.4690554 3.3452039.3127024 1.0055516.7646567 1.8667426 1.3558632 2.5835726.5912054.7168295 1.3143321 1.2743636 2.1693811 1.672602.855049.3982386 1.8249186.5973578 2.9096091.5973578zm3.004886-9.9161401h-5.995114v-.552556c0-.8562126.2833878-1.5531304.8501629-2.0907525.5667751-.537622 1.28013-.806433 2.1400651-.806433.8697066 0 1.5879476.268811 2.1547232.806433.5667755.5376221.8501628 1.2345399.8501628 2.0907525v.552556zm13.7491857 9.9161401c.8403816 0 1.6294693-.1194715 2.3672638-.3584147.7377851-.2389431 1.3973941-.5973578 1.9788271-1.0752441.581434-.4778862 1.052932-1.072755 1.414495-1.7846065.361564-.7118515.591205-1.5556192.688925-2.5313039h-3.7524425c-.1172638 1.0354204-.4177524 1.7572277-.9014658 2.1654222-.4837134.4081944-1.1457658.6122918-1.9861564.6122918-.840391 0-1.5244299-.2713001-2.0521172-.8139001-.5276873-.5426002-.791531-1.2917863-.791531-2.2475588v-4.2860426c0-1.0354099.2785017-1.8020188.8355049-2.2998276.5570033-.4977979 1.2166124-.7466973 1.9788274-.7466973.762215 0 1.3949514.1941413 1.8982085.5824239.503257.3882826.8037456 1.0802217.9014658 2.0758185h3.7524433c-.087948-.9856405-.315147-1.8343861-.681596-2.5462378-.36645-.7118518-.845278-1.29676405-1.436483-1.7547387-.591204-.45797465-1.253257-.79398752-1.9861559-1.00804135-.732899-.21405384-1.4999997-.32107984-2.3013029-.32107984-1.0553746 0-2.0032572.18916271-2.8436482.56748994-.840391.37832633-1.5610749.92341536-2.1620521 1.63526705-.6009772.7118518-1.0627036 1.5780206-1.3851792 2.5985066-.3224756 1.0204861-.4837133 2.1728892-.4837133 3.4572085 0 1.2046715.1465798 2.2998277.4397394 3.2854682.2931596.9856404.7353421 1.8318974 1.3265472 2.5387708.5912054.7068734 1.3167754 1.2594296 2.1767101 1.657668.8599347.3982386 1.8615635.5973578 3.004886.5973578zm16.5342019 0c1.143323 0 2.159609-.1941413 3.04886-.5824239.889251-.3882826 1.63925-.9458165 2.25-1.6726019.610749-.7267855 1.074919-1.5879764 1.392508-2.5835727.317589-.9955962.476384-2.1056864.476384-3.3302699 0-1.2245836-.158795-2.3371626-.476384-3.337737-.317589-1.0005743-.781759-1.8617655-1.392508-2.5835726-.610737-.72180711-1.360737-1.2768524-2.25-1.665135-.889251-.3882826-1.905537-.58242389-3.04886-.58242389-1.143322 0-2.159609.19414129-3.04886.58242389-.889251.3882826-1.639251.94332789-2.25 1.665135-.610749.7218071-1.077361 1.5829983-1.399837 2.5835726-.322476 1.0005744-.483713 2.1131534-.483713 3.337737 0 1.2245835.161237 2.3346737.483713 3.3302699.322476.9955963.789088 1.8567872 1.399837 2.5835727.610745.7267857 1.360745 1.2843196 2.25 1.6726019.889251.3882826 1.905538.5824239 3.04886.5824239zm0-2.9718552c-.938111 0-1.717427-.2563662-2.337948-.7690982-.620521-.5127323-.930782-1.2370287-.930782-2.1728892v-4.5249856c0-.9358609.310261-1.657668.930782-2.1654222.620521-.5077542 1.399837-.7616312 2.337948-.7616312.938111 0 1.717427.2488994 2.337948.7466973.620521.4977979.930782 1.2245835.930782 2.1803561v4.5249856c0 .9657284-.310261 1.6974917-.930782 2.1952901-.620521.4977981-1.399837.7466973-2.337948.7466973zm14.760586 2.5985066v-9.0201034c0-1.1449362.273616-2.0683515.820847-2.770247.547232-.7018954 1.270359-1.0528432 2.169381-1.0528432h.029316c1.446255 0 2.169381.9657288 2.169381 2.8971855v9.9460081h3.752443v-9.0201034c0-1.1449362.276058-2.0683515.828176-2.770247.552117-.7018954 1.277687-1.0528432 2.17671-1.0528432h.029316c1.436482 0 2.154724.9657288 2.154724 2.8971855v9.9460081h3.752443V12.5881677c0-1.7920735-.393324-3.1983537-1.179968-4.21883973-.786644-1.02048692-1.961727-1.53072946-3.525244-1.53072946-2.110749 0-3.664495.97070649-4.661238 2.91211949-.342019-.93586094-.867264-1.65517873-1.575733-2.15795522-.708469-.50277557-1.614821-.75416427-2.719055-.75416427-1.016287 0-1.864007.22898778-2.54316.68696151-.679153.45797465-1.238599 1.10511201-1.678339 1.94141298V7.21194716h-3.752443V22.8029868h3.752443zm30.605864.3733486c1.016286 0 1.905537-.2140531 2.667752-.6421596.762215-.4281063 1.392508-1.0105302 1.890879-1.7472717.498372-.7367413.867264-1.5979322 1.106678-2.5835727.239414-.9856404.359121-2.0509287.359121-3.1958644 0-1.1250237-.119707-2.1878231-.359121-3.1883975-.239414-1.0005744-.608306-1.8667433-1.106678-2.5985066-.498371-.73176336-1.128664-1.31169796-1.890879-1.73980472-.762215-.42810584-1.651466-.64215967-2.667752-.64215967-1.026059 0-1.907981.2190306-2.645766.65709362-.737785.43806211-1.346091 1.04537622-1.824918 1.82194137V2h-3.752443v20.8029868h3.752443v-2.1056864c.47882.7765652 1.08957 1.3838791 1.832247 1.8219414.742671.4380624 1.62215.6570936 2.638437.6570936zm-1.026059-2.9718552c-1.201954 0-2.076547-.3658817-2.623779-1.097645-.547231-.7317634-.820846-1.7099369-.820846-2.9345204v-2.3296956c0-1.2245836.273615-2.2027571.820846-2.9345204.547232-.7317634 1.421825-1.097645 2.623779-1.097645.98697 0 1.758958.268811 2.315961.806433.557003.5376221.835505 1.2644078.835505 2.1803562v4.405514c0 .9159466-.280945 1.6452211-.842834 2.1878231-.561889.5426-1.331433.8139001-2.308632.8139001zm14.73127-14.79954051V2h-3.869707v3.40493969h3.869707zm-.058632 17.39804711V7.21194716h-3.752443V22.8029868h3.752443zm8.369707 0v-9.0201034c0-1.1449362.290717-2.0683515.87215-2.770247.581434-.7018954 1.390065-1.0528432 2.425896-1.0528432.899022 0 1.539088.2538771 1.920195.7616313.381108.5077541.571661 1.2196059.571661 2.1355542v9.9460081h3.752443V12.5881677c0-1.7920735-.405536-3.1983537-1.216612-4.21883973-.811075-1.02048692-2.076547-1.53072946-3.796417-1.53072946-1.08469 0-1.995928.22898778-2.733713.68696151-.737779.45797465-1.336313 1.10511201-1.795603 1.94141298V7.21194716h-3.752443V22.8029868h3.752443zm17.941368.3733486c1.182411 0 2.137622-.251388 2.865635-.7541642.728014-.5027761 1.31189-1.1822706 1.751629-2.0384837h.131922l.029316 2.4192993h5.907166v-2.9718553h-2.579805v-7.6461803c0-1.7522494-.532573-3.0813706-1.597719-3.98736361-1.065147-.90599211-2.516287-1.35898908-4.353421-1.35898908-.918566 0-1.768729.11200459-2.550488.33601378-.781759.22400919-1.456026.55006671-2.022801.97817347-.566776.42810675-1.021173.96323954-1.363193 1.60539924-.342019.6421596-.522801 1.3913462-.542345 2.2475588h3.752443c0-.7168294.239414-1.2619184.718241-1.6352671.478827-.3733486 1.099349-.5600229 1.861564-.5600229.742671 0 1.32899.1816966 1.758957.545089.429967.3633924.644951.9532832.644951 1.7696726v1.0155083l-4.236156.3584147c-1.62215.1493395-2.863192.6819839-3.723127 1.5979322-.859934.9159489-1.289902 2.0061269-1.289902 3.2705342 0 .7168294.119706 1.363967.35912 1.941413.239414.577446.57899 1.0802223 1.01873 1.5083286.439739.4281063.950326.7616312 1.531759 1.0005743.581433.2389432 1.223941.3584147 1.927524.3584147zm1.319219-2.9718552c-.664496 0-1.206841-.1169825-1.627036-.3509477-.420196-.2339653-.630293-.584913-.630293-1.0528432v-1.3440552c.009771-.6172699.293159-.9557725.850162-1.0155083l4.5-.4032166v.6122918c0 .9856405-.276058 1.8244303-.828175 2.5163699-.552118.6919395-1.307004 1.0379093-2.264658 1.0379093zm21.122149 2.5985066v-2.9718553h-3.811075v-9.662263h3.811075V7.21194716h-3.811075V2h-3.752443v5.21194716h-3.034202v2.95692134h3.034202v12.6341183h7.563518zm9.967427.3733486c1.143323 0 2.159609-.1941413 3.04886-.5824239.889251-.3882826 1.639251-.9458165 2.25-1.6726019.610749-.7267855 1.074919-1.5879764 1.392508-2.5835727.317589-.9955962.476385-2.1056864.476385-3.3302699 0-1.2245836-.158796-2.3371626-.476385-3.337737-.317589-1.0005743-.781759-1.8617655-1.392508-2.5835726-.610737-.72180711-1.360737-1.2768524-2.25-1.665135-.889251-.3882826-1.905537-.58242389-3.04886-.58242389-1.143322 0-2.159609.19414129-3.04886.58242389-.889251.3882826-1.639251.94332789-2.25 1.665135-.610749.7218071-1.077361 1.5829983-1.399837 2.5835726-.322476 1.0005744-.483713 2.1131534-.483713 3.337737 0 1.2245835.161237 2.3346737.483713 3.3302699.322476.9955963.789088 1.8567872 1.399837 2.5835727.610745.7267857 1.360745 1.2843196 2.25 1.6726019.889251.3882826 1.905538.5824239 3.04886.5824239zm0-2.9718552c-.938111 0-1.717426-.2563662-2.337948-.7690982-.620521-.5127323-.930782-1.2370287-.930782-2.1728892v-4.5249856c0-.9358609.310261-1.657668.930782-2.1654222.620522-.5077542 1.399837-.7616312 2.337948-.7616312.938111 0 1.717427.2488994 2.337948.7466973.620521.4977979.930782 1.2245835.930782 2.1803561v4.5249856c0 .9657284-.310261 1.6974917-.930782 2.1952901-.620521.4977981-1.399837.7466973-2.337948.7466973zm14.760586 2.5985066V10.1987364H251V7.21194716h-8.545603V22.8029868h3.752443zM6.55462699 7.328036c.06604158.48958572.15960049 1.00022888.28618018 1.52666514 1.0757654-.25725697 2.25005871-.45168241 3.49012603-.57805452L10.951 9.49247153l-.2781472.39355114c-.3366573.48711804-.6648014.99940633-.98675415 1.53242303-.41275988.6896315-.79800244 1.3950561-1.13921728 2.1004807.3467183.7054245.7264574 1.4055848 1.14472075 2.0952163.42927028.7054245.87505098 1.3739986 1.33183858 2.0004577.8145128.0631724 1.6455361.1000229 2.4765593.1000229.5421687 0 1.0820257-.0154793 1.6180726-.0450049L16.05 19.4994715l-.1343865.1678404c-.5022421.6063765-1.0158989 1.1690784-1.5295556 1.6849859 1.3986636 1.2352981 2.7337783 2.0354816 3.7941411 2.3282198l.658801 1.2939539-.0190476-.000798c-1.4857538-.0844704-3.3817755-1.0928794-5.2979385-2.7948707-2.0032614 1.7898832-3.9845088 2.8216983-5.49796172 2.8216983-.46229107 0-.88055442-.0947585-1.23827966-.2948043-1.55197717-.8528267-1.90419894-3.5165942-1.11169996-6.8647288C2.23991031 16.8354748 0 15.2140511 0 13.5031333c0-1.7056535 2.22890338-3.3218128 5.6520587-4.33257041-.3465284-1.44933796-.47719849-2.7706185-.38750375-3.87159226l1.23404607-.00044148c-.05658093.58976418-.04058173 1.27842579.05602597 2.02950685zM19.4158689 23.7590068l.5857761 1.0482128-.106645.0362519-.5442645-1.069281c.022192-.0045441.0439073-.0096013.0651334-.0151837zm-12.56405479-5.602177c-.12107624.5317006-.22013861 1.0528725-.28067673 1.5477226-.25315939 2.0109865.07154505 3.5745021.82001631 3.9851224.16510395.0894942.37423563.1368734.62189156.1421378 1.14472075 0 2.82878105-.8738842 4.62291075-2.468986-.7759886-.7738613-1.5464737-1.6582742-2.2894415-2.6321813-1.23827969-.1263447-2.41602123-.3211261-3.49470039-.5738155zm8.17264569.6896315c-.5008153.0263218-1.0126375.0368505-1.5299633.0368505-.5118222 0-1.018141-.0157931-1.5134529-.0368505.5063188.6159304 1.0181411 1.1792172 1.5299633 1.684596.5063188-.5053788 1.0181411-1.0686656 1.5134529-1.684596zm-7.12148385-3.9114214c-.28618019.7001602-.53933959 1.4003204-.7429678 2.0794232.72095394.1684596 1.47492866.305333 2.25642071.4158846-.26966979-.4000915-.53383612-.8107118-.79249898-1.2318608-.25866286-.421149-.49531186-.842298-.72095393-1.263447zm-1.94822666-4.62737469c-.53383612.16319523-1.05116185.3369192-1.52445985.53170061-1.94822666.78965438-3.20852018 1.83726258-3.20852018 2.66376748 0 .8265049 1.26029352 1.8688487 3.20852018 2.6637674.47880147.1947814.99612719.3737698 1.54097024.536965.30819405-1.0265507.71545047-2.0952163 1.22176926-3.1902037-.51182225-1.1002518-.92458214-2.1741817-1.23827965-3.20599679zm6.16807621 1.48545369l2.1393893 4.1965767c-.0799973.0071503-.1610474.0108055-.242984.0108055-1.4338162 0-2.5961539-1.1192881-2.5961539-2.5 0-.6601412.2657051-1.2605221.6997486-1.7073822zM9.4109254 9.57591881c-.78699552.11055161-1.54647371.2526894-2.26742764.41588464.20913167.68436713.46229107 1.38979175.75947819 2.09521625.22564207-.421149.46229107-.842298.71545047-1.26344696.25315939-.42641337.52282919-.84229801.79249898-1.24765393z" />
        <g stroke={isDark ? gray[9] : gray[1]} stroke-width=".3">
          <path d="M6.82829268 1.03160251L19.295122 24.9797667h4.8965853L11.43804878 1.03160251zM6.76170732 1.09898912l-1.4392683 3.97580994 3.60585366-.00518359-2.14609756-4.03801296zM25.7641463 20.7655118l-1.572439 4.2142549-2.2434146-4.2142549z" />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
