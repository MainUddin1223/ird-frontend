export type ICategoriesContainerProps = {
    setDuasList: (duasList: IDuasList[]) => void
}
export type ICategory = {
    cat_id: number,
    id: number,
    cat_name_bn: string,
    cat_name_en: string,
    no_of_subCat: 4,
    no_of_dua: 7,
    cat_icon: string
}
export type ICategoryProps = {
    category: ICategory,
    index: number,
    active: number,
    setActive: (active: number) => void,
    setDuasList: (duasList: IDuasList[]) => void
}

export type IDua = {
    id: number,
    cat_id: number,
    subcat_id: number,
    no_of_dua: number,
    subcat_name_bn: string,
    dua_id: number,
    dua_name_bn: string,
    dua_name_en: string,
    top_en: string,
    dua_arabic: string,
    clean_arabic: string,
    transliteration_en: string,
    translation_en: string,
    refference_en: string,
    audio: string
}

export type IDuasList = {
    sub_category_name: string,
    dua_list: IDua[]
}

export type IChildCategoryProps = {
    subCat: IDuasList

}
export type IDuaProps = {
    dua: IDua
}
export type IDuasCOntainerProps = {
    duasList: IDuasList[]
}