import React from "react";
import "./Privacy-policy.css";
import {useHistory} from "react-router-dom";
import Button from "../../components/Button/Button";

function PrivacyPolicy() {
    let history = useHistory();

     return (
        <div className="terms-conditions">
            <Button
                type="button"
                name="Ga terug naar de vorige pagina"
                className="go-back-button"
                onClick={() => history.goBack()}
            />
            <h1>PRIVACYBELEID</h1>
            <ol>
                <li>
                    Donec dignissim volutpat lorem, at scelerisque augue vestibulum quis. Duis rhoncus, justo eu cursus
                    pharetra, magna risus dictum justo, a efficitur eros augue lobortis sapien. Donec pellentesque at
                    elit vitae scelerisque. Aliquam nulla sem, cursus sit amet condimentum nec, volutpat a mi. Donec sem
                    enim, sagittis vitae porta nec, mollis efficitur tortor. Duis arcu purus, ultrices id leo aliquet,
                    mattis imperdiet nisl. Praesent aliquam libero nec sollicitudin tincidunt. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam tristique interdum
                    laoreet. Aenean blandit posuere odio sed varius. Cras at lectus fermentum, facilisis massa sed,
                    tincidunt ipsum. Cras venenatis erat felis, eu ultricies magna luctus sit amet. Vivamus eleifend
                    magna at urna scelerisque dignissim. Vestibulum mollis tincidunt mi ut fringilla. Pellentesque
                    pellentesque nisi lorem, id aliquam odio tristique nec.
                </li>
                <br></br>
                <li>
                    Integer pretium consectetur accumsan. Integer aliquam lectus risus, et condimentum nisi egestas sed.
                    Maecenas euismod elementum ante. Morbi et tempor lorem. Duis ullamcorper, dolor sed consequat
                    faucibus, libero nulla porttitor augue, et iaculis libero urna a est. Cras eu libero tellus. Fusce
                    ac sapien ex. Sed tempus tincidunt elit, eu pharetra sem posuere non. Maecenas ac ullamcorper leo.
                    Ut euismod justo sem, vel vehicula libero fringilla eu. Donec cursus ipsum non pretium tristique.
                    Donec et sagittis nibh. Nunc consequat facilisis arcu, quis convallis lorem cursus ac. Morbi sit
                    amet diam ultrices, vestibulum nibh non, tincidunt dolor.
                </li>
                <br></br>
                <li>
                    Etiam id posuere justo, sed iaculis diam. Phasellus ut maximus nisl. Duis ornare in tortor in
                    hendrerit. Suspendisse potenti. Cras consequat feugiat gravida. Ut a velit id leo hendrerit aliquam
                    quis finibus leo. In ut scelerisque diam. Duis lacinia lectus a odio ultricies malesuada. Integer
                    ullamcorper convallis orci ac rhoncus.
                </li>
                <br></br>
                <li>
                    Maecenas vestibulum, augue faucibus faucibus mollis, dui erat posuere purus, a vulputate eros risus
                    a nulla. Cras ut nisi pretium lectus sodales blandit viverra fermentum dolor. Duis imperdiet turpis
                    justo, eu euismod felis convallis at. Ut in rutrum velit, at aliquet lectus. Duis luctus luctus est,
                    finibus blandit nibh mattis eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae; Donec euismod mauris non massa mattis dictum.
                </li>
                <br></br>
                <li>
                    Curabitur tempor orci id lobortis vehicula. Aliquam et nulla bibendum erat ultricies faucibus. Proin
                    egestas sit amet leo a congue. Fusce metus sapien, aliquet sed neque sit amet, pellentesque
                    efficitur justo. Praesent imperdiet molestie lacus, nec auctor lectus porttitor a. Etiam placerat
                    porta lacus id auctor. Phasellus ipsum risus, pretium non accumsan sit amet, tincidunt vitae diam.
                    Nunc eu arcu imperdiet, congue dui a, rhoncus orci. Vestibulum malesuada enim hendrerit, eleifend
                    lorem et, mattis massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi volutpat
                    euismod efficitur. Duis condimentum eget neque non congue. Donec tempus ut nisl quis feugiat. Nunc a
                    interdum mauris.
                </li>
                <br></br>
                <li>
                    Praesent non odio eu odio scelerisque semper. Quisque eget tristique neque. Mauris ac ante vehicula,
                    ultricies odio et, accumsan lacus. Morbi eu libero et magna pellentesque accumsan. Duis lobortis
                    pellentesque magna, non placerat urna cursus eu. Quisque consectetur neque quam, egestas cursus nibh
                    posuere nec. Fusce porta, neque sit amet varius accumsan, quam lorem accumsan lacus, at iaculis diam
                    arcu eu enim. Phasellus hendrerit eros eget nunc feugiat viverra. Aliquam rutrum, nibh vel iaculis
                    dignissim, mi ante tincidunt enim, nec venenatis sapien nibh et nunc. Vestibulum vitae justo libero.
                    Nam mattis blandit lobortis. Fusce ornare dictum suscipit. Donec porta dolor ut fringilla ultricies.
                    Integer eget scelerisque ante, fringilla pretium tellus.
                </li>
                <br></br>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id congue erat, ut dignissim sem.
                    Vestibulum luctus non dui quis vehicula. Donec placerat ligula vel feugiat accumsan. Nunc
                    scelerisque a dui et molestie. Nulla nibh velit, ultricies non pulvinar sit amet, facilisis a nunc.
                    Maecenas ultricies, leo in sodales interdum, odio urna elementum erat, vel interdum ex est id elit.
                    Cras at arcu sed ex auctor suscipit a eu magna. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Morbi quis pharetra nibh. Nulla vestibulum sapien sit amet
                    ipsum eleifend, ac varius ipsum hendrerit. Aliquam bibendum bibendum posuere. Mauris suscipit
                    pellentesque felis nec porta.
                </li>
                <br></br>
                <li>
                    Curabitur at orci lorem. Cras ut fermentum nisi, quis congue orci. Proin pulvinar pharetra molestie.
                    In accumsan tortor quis lorem porttitor gravida. Maecenas iaculis leo et nulla efficitur accumsan.
                    Donec tincidunt aliquam posuere. Proin pharetra pretium purus eget volutpat. Donec pharetra metus in
                    metus mollis, sit amet hendrerit odio faucibus. Donec neque leo, lobortis eu sem ut, lobortis semper
                    mi.
                </li>
                <br></br>
                <li>
                    Maecenas sed dui at sapien molestie auctor eget accumsan nulla. Sed mattis, erat rhoncus cursus
                    faucibus, nibh neque pharetra tellus, eu aliquam nunc libero at sem. Sed ornare justo nisl, eget
                    lacinia nisi fringilla at. Vivamus ut odio tellus. In tristique condimentum porttitor. Mauris urna
                    leo, interdum ac magna et, consequat efficitur nisl. Sed eu ante non nulla lacinia venenatis. Nam
                    massa justo, scelerisque eu sapien eu, imperdiet feugiat orci. Proin suscipit neque nisi, nec
                    lobortis enim scelerisque eget. Nunc quis ex lobortis augue fermentum ullamcorper. Proin interdum
                    eros vitae augue condimentum, eu lobortis eros dapibus. Proin maximus dignissim nisi et interdum.
                    Suspendisse eget massa eu felis suscipit tristique. Maecenas mattis mollis justo ut feugiat. Donec
                    faucibus, risus a blandit cursus, sem tortor tincidunt erat, nec congue urna risus a libero. Ut
                    ullamcorper, tortor ac mollis congue, nibh mi laoreet lectus, eget interdum erat ante non quam.
                </li>
                <br></br>
                <li>
                    Curabitur ac tortor tempor, ultrices mi id, consequat mauris. Donec facilisis, neque sit amet
                    imperdiet efficitur, purus tellus lobortis est, vel luctus purus lorem gravida quam. Curabitur
                    rhoncus nulla metus, ac dapibus massa faucibus nec. Fusce faucibus lacus vestibulum, sagittis nibh
                    eu, commodo lectus. Pellentesque blandit sodales diam, in iaculis enim aliquet non. Pellentesque ut
                    neque ut urna ultrices porttitor quis non tellus. Nullam suscipit neque vel ipsum tempus, sed
                    porttitor neque blandit. Ut congue arcu mauris. Etiam ullamcorper laoreet vestibulum. Ut odio magna,
                    sagittis nec faucibus at, pulvinar vel tellus. Sed aliquet quam ac lacinia porta. Donec elementum
                    urna sed nulla vehicula semper. Donec id leo condimentum, semper erat sit amet, varius odio. Integer
                    malesuada convallis eros at vulputate.
                </li>
            </ol>
            <Button
                type="button"
                name="Ga terug naar de vorige pagina"
                className="go-back-button"
                onClick={() => history.goBack()}
            />
        </div>
    );
}

export default PrivacyPolicy;